import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irm")
export default class IrmController {
  @operation({
    summary: "Get Irm",
  })
  @get()
  static getIrm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Irm",
  })
  @post("{id}")
  static createIrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

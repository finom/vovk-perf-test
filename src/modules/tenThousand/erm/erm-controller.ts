import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erm")
export default class ErmController {
  @operation({
    summary: "Get Erm",
  })
  @get()
  static getErm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erm",
  })
  @post("{id}")
  static createErm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

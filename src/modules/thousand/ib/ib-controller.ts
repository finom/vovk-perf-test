import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ib")
export default class IbController {
  @operation({
    summary: "Get Ib",
  })
  @get()
  static getIb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ib",
  })
  @post("{id}")
  static createIb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

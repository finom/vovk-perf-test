import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixn")
export default class IxnController {
  @operation({
    summary: "Get Ixn",
  })
  @get()
  static getIxn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixn",
  })
  @post("{id}")
  static createIxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

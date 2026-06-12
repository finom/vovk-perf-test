import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixs")
export default class IxsController {
  @operation({
    summary: "Get Ixs",
  })
  @get()
  static getIxs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixs",
  })
  @post("{id}")
  static createIxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

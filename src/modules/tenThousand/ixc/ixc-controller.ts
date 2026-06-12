import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixc")
export default class IxcController {
  @operation({
    summary: "Get Ixc",
  })
  @get()
  static getIxc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixc",
  })
  @post("{id}")
  static createIxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixp")
export default class IxpController {
  @operation({
    summary: "Get Ixp",
  })
  @get()
  static getIxp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixp",
  })
  @post("{id}")
  static createIxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

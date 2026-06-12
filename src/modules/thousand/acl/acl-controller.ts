import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acl")
export default class AclController {
  @operation({
    summary: "Get Acl",
  })
  @get()
  static getAcl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acl",
  })
  @post("{id}")
  static createAcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdk")
export default class HdkController {
  @operation({
    summary: "Get Hdk",
  })
  @get()
  static getHdk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdk",
  })
  @post("{id}")
  static createHdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmj")
export default class GmjController {
  @operation({
    summary: "Get Gmj",
  })
  @get()
  static getGmj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmj",
  })
  @post("{id}")
  static createGmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

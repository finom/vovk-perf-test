import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bol")
export default class BolController {
  @operation({
    summary: "Get Bol",
  })
  @get()
  static getBol = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bol",
  })
  @post("{id}")
  static createBol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

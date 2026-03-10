import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhx")
export default class JhxController {
  @operation({
    summary: "Get Jhx",
  })
  @get()
  static getJhx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhx",
  })
  @post("{id}")
  static createJhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

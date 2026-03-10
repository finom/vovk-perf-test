import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgz")
export default class HgzController {
  @operation({
    summary: "Get Hgz",
  })
  @get()
  static getHgz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgz",
  })
  @post("{id}")
  static createHgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

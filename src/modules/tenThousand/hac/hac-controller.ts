import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hac")
export default class HacController {
  @operation({
    summary: "Get Hac",
  })
  @get()
  static getHac = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hac",
  })
  @post("{id}")
  static createHac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

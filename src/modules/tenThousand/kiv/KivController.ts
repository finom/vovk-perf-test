import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kiv")
export default class KivController {
  @operation({
    summary: "Get Kiv",
  })
  @get()
  static getKiv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kiv",
  })
  @post("{id}")
  static createKiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

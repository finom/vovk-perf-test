import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hog")
export default class HogController {
  @operation({
    summary: "Get Hog",
  })
  @get()
  static getHog = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hog",
  })
  @post("{id}")
  static createHog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

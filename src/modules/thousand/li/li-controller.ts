import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("li")
export default class LiController {
  @operation({
    summary: "Get Li",
  })
  @get()
  static getLi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Li",
  })
  @post("{id}")
  static createLi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

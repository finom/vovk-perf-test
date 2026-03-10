import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqy")
export default class GqyController {
  @operation({
    summary: "Get Gqy",
  })
  @get()
  static getGqy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqy",
  })
  @post("{id}")
  static createGqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

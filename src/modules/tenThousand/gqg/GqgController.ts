import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqg")
export default class GqgController {
  @operation({
    summary: "Get Gqg",
  })
  @get()
  static getGqg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqg",
  })
  @post("{id}")
  static createGqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

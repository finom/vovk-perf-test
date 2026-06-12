import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqx")
export default class GqxController {
  @operation({
    summary: "Get Gqx",
  })
  @get()
  static getGqx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqx",
  })
  @post("{id}")
  static createGqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

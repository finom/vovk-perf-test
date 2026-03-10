import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqh")
export default class GqhController {
  @operation({
    summary: "Get Gqh",
  })
  @get()
  static getGqh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqh",
  })
  @post("{id}")
  static createGqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

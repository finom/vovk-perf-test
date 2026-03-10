import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqz")
export default class GqzController {
  @operation({
    summary: "Get Gqz",
  })
  @get()
  static getGqz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqz",
  })
  @post("{id}")
  static createGqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

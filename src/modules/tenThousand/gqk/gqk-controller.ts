import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqk")
export default class GqkController {
  @operation({
    summary: "Get Gqk",
  })
  @get()
  static getGqk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqk",
  })
  @post("{id}")
  static createGqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqj")
export default class GqjController {
  @operation({
    summary: "Get Gqj",
  })
  @get()
  static getGqj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqj",
  })
  @post("{id}")
  static createGqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

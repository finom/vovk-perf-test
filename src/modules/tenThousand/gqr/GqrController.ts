import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqr")
export default class GqrController {
  @operation({
    summary: "Get Gqr",
  })
  @get()
  static getGqr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqr",
  })
  @post("{id}")
  static createGqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

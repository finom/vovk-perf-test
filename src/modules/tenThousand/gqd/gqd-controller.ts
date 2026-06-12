import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqd")
export default class GqdController {
  @operation({
    summary: "Get Gqd",
  })
  @get()
  static getGqd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqd",
  })
  @post("{id}")
  static createGqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bov")
export default class BovController {
  @operation({
    summary: "Get Bov",
  })
  @get()
  static getBov = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bov",
  })
  @post("{id}")
  static createBov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

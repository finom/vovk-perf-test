import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxi")
export default class GxiController {
  @operation({
    summary: "Get Gxi",
  })
  @get()
  static getGxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxi",
  })
  @post("{id}")
  static createGxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

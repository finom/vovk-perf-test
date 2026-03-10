import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqq")
export default class GqqController {
  @operation({
    summary: "Get Gqq",
  })
  @get()
  static getGqq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqq",
  })
  @post("{id}")
  static createGqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

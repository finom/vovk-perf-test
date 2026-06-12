import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhm")
export default class JhmController {
  @operation({
    summary: "Get Jhm",
  })
  @get()
  static getJhm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhm",
  })
  @post("{id}")
  static createJhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

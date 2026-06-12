import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jay")
export default class JayController {
  @operation({
    summary: "Get Jay",
  })
  @get()
  static getJay = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jay",
  })
  @post("{id}")
  static createJay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

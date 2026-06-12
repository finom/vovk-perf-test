import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxt")
export default class HxtController {
  @operation({
    summary: "Get Hxt",
  })
  @get()
  static getHxt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hxt",
  })
  @post("{id}")
  static createHxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

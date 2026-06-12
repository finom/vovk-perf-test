import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfv")
export default class HfvController {
  @operation({
    summary: "Get Hfv",
  })
  @get()
  static getHfv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfv",
  })
  @post("{id}")
  static createHfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

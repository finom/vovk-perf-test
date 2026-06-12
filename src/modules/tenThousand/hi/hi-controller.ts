import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hi")
export default class HiController {
  @operation({
    summary: "Get Hi",
  })
  @get()
  static getHi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hi",
  })
  @post("{id}")
  static createHi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

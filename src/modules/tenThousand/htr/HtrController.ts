import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htr")
export default class HtrController {
  @operation({
    summary: "Get Htr",
  })
  @get()
  static getHtr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Htr",
  })
  @post("{id}")
  static createHtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

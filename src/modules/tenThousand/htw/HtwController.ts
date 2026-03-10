import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htw")
export default class HtwController {
  @operation({
    summary: "Get Htw",
  })
  @get()
  static getHtw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Htw",
  })
  @post("{id}")
  static createHtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

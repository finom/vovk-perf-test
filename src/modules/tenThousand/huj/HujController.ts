import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huj")
export default class HujController {
  @operation({
    summary: "Get Huj",
  })
  @get()
  static getHuj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Huj",
  })
  @post("{id}")
  static createHuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

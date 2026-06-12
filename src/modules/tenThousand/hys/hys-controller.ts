import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hys")
export default class HysController {
  @operation({
    summary: "Get Hys",
  })
  @get()
  static getHys = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hys",
  })
  @post("{id}")
  static createHys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

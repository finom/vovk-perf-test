import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoo")
export default class AooController {
  @operation({
    summary: "Get Aoo",
  })
  @get()
  static getAoo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aoo",
  })
  @post("{id}")
  static createAoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

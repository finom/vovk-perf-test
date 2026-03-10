import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjy")
export default class HjyController {
  @operation({
    summary: "Get Hjy",
  })
  @get()
  static getHjy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hjy",
  })
  @post("{id}")
  static createHjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

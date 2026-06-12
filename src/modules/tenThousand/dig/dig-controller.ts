import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dig")
export default class DigController {
  @operation({
    summary: "Get Dig",
  })
  @get()
  static getDig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dig",
  })
  @post("{id}")
  static createDig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

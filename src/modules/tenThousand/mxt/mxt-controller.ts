import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxt")
export default class MxtController {
  @operation({
    summary: "Get Mxt",
  })
  @get()
  static getMxt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxt",
  })
  @post("{id}")
  static createMxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

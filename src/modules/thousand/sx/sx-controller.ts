import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sx")
export default class SxController {
  @operation({
    summary: "Get Sx",
  })
  @get()
  static getSx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sx",
  })
  @post("{id}")
  static createSx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

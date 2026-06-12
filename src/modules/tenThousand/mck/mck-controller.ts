import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mck")
export default class MckController {
  @operation({
    summary: "Get Mck",
  })
  @get()
  static getMck = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mck",
  })
  @post("{id}")
  static createMck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

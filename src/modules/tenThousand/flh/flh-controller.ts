import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flh")
export default class FlhController {
  @operation({
    summary: "Get Flh",
  })
  @get()
  static getFlh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Flh",
  })
  @post("{id}")
  static createFlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

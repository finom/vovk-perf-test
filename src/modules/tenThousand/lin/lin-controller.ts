import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lin")
export default class LinController {
  @operation({
    summary: "Get Lin",
  })
  @get()
  static getLin = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lin",
  })
  @post("{id}")
  static createLin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

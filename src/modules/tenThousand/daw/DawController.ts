import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("daw")
export default class DawController {
  @operation({
    summary: "Get Daw",
  })
  @get()
  static getDaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Daw",
  })
  @post("{id}")
  static createDaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

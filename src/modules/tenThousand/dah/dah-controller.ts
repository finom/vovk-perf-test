import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dah")
export default class DahController {
  @operation({
    summary: "Get Dah",
  })
  @get()
  static getDah = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dah",
  })
  @post("{id}")
  static createDah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

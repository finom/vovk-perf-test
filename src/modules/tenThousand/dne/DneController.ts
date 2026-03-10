import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dne")
export default class DneController {
  @operation({
    summary: "Get Dne",
  })
  @get()
  static getDne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dne",
  })
  @post("{id}")
  static createDne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

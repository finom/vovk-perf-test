import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dj")
export default class DjController {
  @operation({
    summary: "Get Dj",
  })
  @get()
  static getDj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dj",
  })
  @post("{id}")
  static createDj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

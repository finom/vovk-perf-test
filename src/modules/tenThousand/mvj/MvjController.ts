import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvj")
export default class MvjController {
  @operation({
    summary: "Get Mvj",
  })
  @get()
  static getMvj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvj",
  })
  @post("{id}")
  static createMvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvf")
export default class MvfController {
  @operation({
    summary: "Get Mvf",
  })
  @get()
  static getMvf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvf",
  })
  @post("{id}")
  static createMvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cri")
export default class CriController {
  @operation({
    summary: "Get Cri",
  })
  @get()
  static getCri = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cri",
  })
  @post("{id}")
  static createCri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

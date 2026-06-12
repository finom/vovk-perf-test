import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izf")
export default class IzfController {
  @operation({
    summary: "Get Izf",
  })
  @get()
  static getIzf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izf",
  })
  @post("{id}")
  static createIzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

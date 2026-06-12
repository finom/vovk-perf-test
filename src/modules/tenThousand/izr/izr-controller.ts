import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izr")
export default class IzrController {
  @operation({
    summary: "Get Izr",
  })
  @get()
  static getIzr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izr",
  })
  @post("{id}")
  static createIzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

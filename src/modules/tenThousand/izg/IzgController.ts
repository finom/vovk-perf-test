import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izg")
export default class IzgController {
  @operation({
    summary: "Get Izg",
  })
  @get()
  static getIzg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izg",
  })
  @post("{id}")
  static createIzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
